# Open the 'inputs.txt' file for reading
InputFromFile = open("./input.txt", "r")

# Initialize an empty list to store the numbers
Inputs = []

# Initialize the variable to accumulate the total sum of results
Sum = 0

# Read each line from the file, strip whitespace, and convert to an integer
for line in InputFromFile:
    Inputs.append(int(line.strip()))

# 0 + every number in input.txt
for x in Inputs:
    Sum += x

print(Sum)
