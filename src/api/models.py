from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, ForeignKey
from sqlalchemy.dialects.postgresql import JSON  # if using PostgreSQL
from sqlalchemy.orm import Mapped, mapped_column, relationship

db = SQLAlchemy()

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    first_name: Mapped[str] = mapped_column(String(120), nullable=False)
    last_name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    state: Mapped[str] = mapped_column(String(120), nullable=False)
    city: Mapped[str] = mapped_column(String(120), nullable=False)
    zip: Mapped[str] = mapped_column(String(120), nullable=False)
    habits: Mapped[list["UserHabits"]] = relationship(back_populates="user")
    goals: Mapped[list["UserGoals"]] = relationship(back_populates="user")
    cuisine_preferences: Mapped[list["Cuisine"]] = relationship(back_populates="user_favorites")
    password: Mapped[str] = mapped_column(nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "state": self.state,
            "city": self.city,
            "zip": self.zip,
            "habits": self.habits,
            "cuisine_prefences": self.cuisine_prefences
            # do not serialize the password, its a security breach
        }
    
class UserHabits(db.Model):
    # what I need to know about a person
    # if they are currently doing meal planning
    # how often they eat out -- simple number
    # food allergeries -- list

    # or make those two relationship yeah that would make a lot of sense
    # so cuisine table-- yeah I like that
    # favorite cuisines -- hmm a gain json object,, yup I think so
    # food preferences-- hmm a gain json object,, yup I think so
    # interest in gardening - radio
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    user: Mapped["User"] = relationship(back_populates="habits")
    planning_fequency: Mapped[int] = mapped_column(nullable=False)
    cooking_fequency: Mapped[int] = mapped_column(nullable=False)
    allergies: Mapped[list] = mapped_column(JSON, nullable=False)
    gardening: Mapped[str] = mapped_column(String(30), nullable=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "planning_fequency": self.planning_fequency,
            "cooking_fequency": self.cooking_fequency,
            "allergies": self.allergies,
            "gardening": self.gardening,
        }
    
class UserGoals(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    user: Mapped["User"] = relationship(back_populates="goals")
    planning_fequency: Mapped[int] = mapped_column(nullable=False)
    cooking_fequency: Mapped[int] = mapped_column(nullable=False)
    gardening: Mapped[str] = mapped_column(String(30), nullable=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "planning_fequency": self.planning_fequency,
            "cooking_fequency": self.cooking_fequency,
            "allergies": self.allergies,
            "gardening": self.gardening,
        }
    
class CuisinePrefernces(db.Model):
    # yes, no, somewhat like, favorite
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    user_favorites: Mapped["User"] = relationship(back_populates="cuisine_preferences")
    American: Mapped[str] = mapped_column(String(30))
    Chinese: Mapped[str] = mapped_column(String(30))
    Jamacian: Mapped[str] = mapped_column(String(30))
    Indian: Mapped[str] = mapped_column(String(30))
    Italian: Mapped[str] = mapped_column(String(30))
    French: Mapped[str] = mapped_column(String(30))
    Japanese: Mapped[str] = mapped_column(String(30))
    Korean: Mapped[str] = mapped_column(String(30))
    Mexican: Mapped[str] = mapped_column(String(30))
    Thai: Mapped[str] = mapped_column(String(30))

    def serialize(self):
        return {
            "id": self.id,
            "American": self.American,
            "Chinese": self.Chinese,
            "Jamacian": self.Jamacian,
            "Indian": self.Indian,
            "Italian": self.Italian,
            "French": self.French,
            "Japanese": self.Japanese,
            "Korean": self.Korean,
            "Mexican": self.Mexican,
            "Thai": self.Thai,
        }