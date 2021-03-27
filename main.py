import tkinter as tk
from tkinter import*
import os

root = tk.Tk()
#def startTest():

canvas = tk.Canvas(root, height=700, width=700, bg="black")
canvas.pack()
frame = tk.Frame(root, bg="white")
frame.place(relwidth=0.8,relheight=0.8,relx=0.1,rely=0.1)
text = Text(frame)
text.insert(INSERT, "Testing")
text.insert(END,"Stop")
text.pack()

startTest = tk.Button(root, text="Start Test", padx=10, pady=5, fg="white", bg="black")
startTest.pack()
root.mainloop()