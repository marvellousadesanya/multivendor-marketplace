from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
class MyAccountManager(BaseUserManager):
    """
    Base level administration priviledge
    Methods: 
        create_user: Create account page for web user (buyer, seller)
        create_superuser: Create upper level priviledges for the top user
    """
    
    def create_user(self, first_name, last_name, username, email, password=None):
        """
        Check for valid input and raise error if not true \
        and create user after validation
        """
        if not email:
            raise ValueError('User must have an email')
        if not username:
            raise ValueError('User must have a username')
        user = self.model(
            email=self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    
    def create_superuser(self, first_name, last_name, email, username, password):
        """
            args:
                user: first_name, last_name, username and password
            Create super user with all priviledges in the django admin panel
            return true if it is present in the database
        """
        user = self.create_user(
            email = self.normalize_email(email),
            username = username,
            password = password,
            first_name = first_name,
            last_name = last_name,
        )
        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superadmin = True
        user.save(using=self._db)
        return user
        

class Account(AbstractBaseUser):
    """
    This class create account for all user with default permision priviledges
    Args:
        firstname: First name of the user
        last_name: Last name of the user
        username: Unique username of the user (MUST BE UNIQUE ELSE RAISE ERROR)
        email: Unique email of the user (MUST BE UNIQUE ELSE RAISE ERROR)
        date_joined: date joined as an authenticated user (automated)
        last_login: date of last login (automated)
        is_admin: default to be false
        is_staff: default to be false
        is_active: default to be false
        is_superadmin: default to be false
    """
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30, unique=True, default='')
    email = models.EmailField(max_length=30, unique=True)
    phone_number = models.CharField(max_length=20)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
    
    objects = MyAccountManager()
    
    def __str__(self):
        """Return first name and last name from the parent class"""
        return (self.first_name + self.last_name)
    
    def has_perms(self, perm, obj=None):
        """if user has admin permission return true"""
        return self.is_admin
    
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, add_label):
        return True