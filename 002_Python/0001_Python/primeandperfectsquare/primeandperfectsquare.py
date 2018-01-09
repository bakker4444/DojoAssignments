# Fine Prime Number and Perfect Square
#
# Write a program that prints all the prime numbers and all the perfect squares for all numbers between 100 and 100000.
# For all numbers between 100 and 100000 test that number for whether it is prime or a perfect square.
# If it is a prime number, print "Foo".
# If it is a perfect square, print "Bar".
# If it is neither, print "FooBar".
# Do not use the python math library for this exercise.
# For example, if the number you are evaluating is 25, you will have to figure out if it is a perfect square. It is, so print "Bar".

def perfect_square_finder(num1):
    if float(num1**0.5) == int(num1**0.5):
        return True
    else:
        return False

def prime_finder(num2):
    prime_flag = False
    if num2 > 1:
        div = 2
        prime_flag = True
        while div <= num2 ** 0.5 and prime_flag == True:
            if num2 % div == 0:
                prime_flag = False
            div += 1
    return prime_flag

def prime_perfect_square(start, end):
    for i in range(start, end + 1):
        if prime_finder(i):
            print i,": Foo ( Prime Number )"
        elif perfect_square_finder(i):
            print i,": Bar ( Perfect Square )"
        else:
            print i,": FooBar ( None of above )"

start_point = input("Enter the start point (>2): ")
end_point = input("Enter the end point (> start point): ")
prime_perfect_square(start_point, end_point)

