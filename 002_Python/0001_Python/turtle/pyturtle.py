import turtle
import random

myMeme = turtle.Screen()
turtle.speed(0)
turtle.colormode(255)

for i in range(100):
    turtle.circle(5*i)
    turtle.circle(-5*i)
    turtle.left(4*i)
    turtle.color(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))
