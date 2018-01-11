# Assignment: Call Center
#
# You're creating a program for a call center.
# Every time a call comes in you need a way to track that call.
# One of your program's requirements is to store calls in a queue
# while callers wait to speak with a call center employee.
# 
# You will create two classes. One class should be Call, the other CallCenter.
# 
#   Call Class
#           Create your call class with an init method. Each instance of Call() should have:
#       Attributes:
#           unique id
#           caller name
#           caller phone number
#           time of call
#           reason for call
#       Methods:
#           display: that prints all Call attributes.
# 
#   CallCenter Class
#           Create your call center class with an init method.
#           Each instance of CallCenter() should have the following attributes:
#       Attributes:
#           calls: should be a list of call objects
#           queue size: should be the length of the call list
#       Methods:
#           add: adds a new call to the end of the call list
#           remove: removes the call from the beginning of the list (index 0).
#           info: prints the name and phone number for each call in the queue as well as the length of the queue.
# 
# You should be able to test your code to prove that it works.
# Remember to build one piece at a time and test as you go for easier debugging!
# 
# Ninja Level:
#       add a method to call center class that can find and remove a call
#       from the queue according to the phone number of the caller.
# 
# Hacker Level:
#       If everything is working properly, your queue should be sorted by time,
#       but what if your calls get out of order? Add a method to the call center class
#       that sorts the calls in the queue according to time of call in ascending order.

import time
import datetime

# Call class
class Call(object):
    def __init__(self, unique_id, caller_name, caller_number, time, reason):
        self.unique_id = unique_id
        self.caller_name = caller_name
        self.caller_number = caller_number
        self.time = time
        self.reason = reason
    def display(self):
        print "Caller Unique ID : " + str(self.unique_id)
        print "Caller Name : " + self.caller_name
        print "Caller Phone Number : " + str(self.caller_number)
        print "Time of Call : " + str(self.time)
        print "Reason for Call : " + self.reason + "\n"

# Call center class - Original assignment
class CallCenter(object):
    def __init__(self, *calls):
        self.calls = []
        self.queue_size = len(calls)
        for i in calls:
            self.calls.append(i)
    def add(self, call):
        self.calls.append(call)
        return self
    def remove(self):
        self.calls.remove(self.calls[0])
        return self
    def info(self):
        for i in range(len(self.calls)):
            print "Caller Name : " + self.calls[i].caller_name
            print "Caller Phone Number : " + self.calls[i].caller_number
        return self

# Call center class - Ninja Level ( inherit from CallCenter )
class CallCenterNinja(CallCenter):
    def find_and_del_by_num(self, number):
        flag = False
        for i in range(len(self.calls)):
            if self.calls[i].caller_number == number:
                del self.calls[i]
                flag = True
                break
        if flag:
            print "Number is remove\n"
        else:
            print "Number does not existed\n"
        return self

# Call center class - Hacker Level ( inherit from CallCenterNinja )
class CallCenterHacker(CallCenterNinja):
    def sort_by_time(self):
        min_time_call = 0
        if len(self.calls) == 0:
            print "There is nothing in queue list. No need to sored\n"
        elif len(self.calls) == 1:
            print "There is only one instance in queue list. No need to sorted\n"
        else:
            print "Sorting ... (ascending order) ...\n"
            for i in range(len(self.calls)-1):
                for j in range(i + 1, len(self.calls)):
                    if self.calls[i].time > self.calls[j].time:
                        min_time_call = self.calls[j]
                        self.calls[j] = self.calls[i]
                        self.calls[i] = min_time_call
        return self

# return specific time when this function is called (eg. "YYYY-MM-DD HH:MM:SS" style)
def called_time():
    return datetime.datetime.fromtimestamp(time.time()).strftime("%Y-%m-%d %H:%M:%S")

print "Please waiting more than 7 seconds ...( time delay : > 7sec )"
print "due to timestamps for individual Call class"

# create instances based on Call class,
# intentionally delayed by 1 sec between each objects
# because of called_time function
# ( total : 7 sec )
c0 = Call(0, "Zero", "000-000-0000", called_time(), "reason is Zero")
time.sleep(1)
c1 = Call(1, "One", "111-111-1111", called_time(), "reason is One")
time.sleep(1)
c2 = Call(2, "Two", "222-222-2222", called_time(), "reason is Two")
time.sleep(1)
c3 = Call(3, "Three", "333-333-3333", called_time(), "reason is Three")
time.sleep(1)
c4 = Call(4, "Four", "444-444-4444", called_time(), "reason is Four")
time.sleep(1)
c5 = Call(5, "Five", "555-555-5555", called_time(), "reason is Five")
time.sleep(1)
c6 = Call(6, "Six", "666-666-6666", called_time(), "reason is Six")
time.sleep(1)
c7 = Call(7, "Seven", "777-777-7777", called_time(), "reason is Seven")

# check display method in Call class (test purpose)
# c0.display()
# c1.display()
c2.display()
c3.display()
# c4.display()
# c5.display()
# c6.display()
# c7.display()
print "####################################################\n"

# create CallCenter instance with 4 Call objects
Dindin_center = CallCenter(c0, c6, c2, c5)
Dindin_center.info()
print "----------------------------------------------------\n"

# test add method in CallCenter class
Dindin_center.add(c1)
Dindin_center.info()
print "----------------------------------------------------\n"

# test remove method in CallCenter class
Dindin_center.remove()
Dindin_center.info()
print "----------------------------------------------------\n"

# create CallCenterNinja instance (Ninja Level, inherit from CallCenter class) with 4 Call objects
Din_center_2 = CallCenterNinja(c0, c3, c5, c7)
Din_center_2.info()
print "====================================================\n"

# test find_and_del_by_num method
# Case 1: the number is not exist in queue list
Din_center_2.find_and_del_by_num("444-444-4444")
Din_center_2.info()
print "====================================================\n"

# test find_and_del_by_num method
# Case 2: the number exists in queue list
Din_center_2.find_and_del_by_num("333-333-3333")
Din_center_2.info()
print "====================================================\n"

# create CallCenterHacker instance (Ninja Level, inherit from CallCenterNinja class) with 4 Call objects (not ordered by time)
# Din_center_3 = CallCenterHacker(c6, c4, c2, c0)
Din_center_3 = CallCenterHacker(c5, c3, c1)
Din_center_3.info()
print "****************************************************\n"

# add call instances on queue list
Din_center_3.add(c4)
Din_center_3.info()
print "****************************************************\n"

# test sort_by_time method in CallCenterHacker class
Din_center_3.sort_by_time()
Din_center_3.info()
print "****************************************************\n"

