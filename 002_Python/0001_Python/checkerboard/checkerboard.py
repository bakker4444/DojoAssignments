# Checkerboard
#
# Write a program that prints a 'checkerboard' pattern to the console.
# Your program should require no input and produce console output that looks like so:
#
# * * * *
#  * * * *
# * * * *
#  * * * *
# * * * *
#  * * * *
# * * * *
#  * * * *

def checker_board():
    chk_brd = ""
    for i in range(8):
        for j in range(8):
            if (i + j) % 2 == 0:
                chk_brd += "*"
            else:
                chk_brd += " "
        chk_brd += "\n"
    print chk_brd

checker_board()
