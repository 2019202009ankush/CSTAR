file=open('Output.txt','r')
file1=open('Simulation.txt','w')
file1.write('--------------------------------------------------------------------------------------------------------\n')
file1.write('|Block Number|\t\t')
file1.write('|  Start  Time|\t\t')
file1.write('|  End  Time  |\t\t\t\t')
file1.write('|Total  Time  |\n')
file1.write('----------------------------------------------------------------------------------------------------\n')
lis=file.readlines()
vals=[]
# print(lis)
j=1
for j in range(1,len(lis)):
	lis1=lis[j].split(' ')
	for k in range (len(lis1)):
		lis1[k]=lis1[k].strip()
	file1.write('|'+str(j)+'\t\t     |\t\t|')
	file1.write(str(lis1[2])+'|\t\t|')
	initial=int(lis1[2])
	val=lis1[4]
	for k in range(5,len(lis1)):
		if(lis1[k]==val):
			file1.write(str(lis1[k-2])+'|\t\t\t    |\t')
			final=int(lis1[k-2])
			total=final-initial
			vals.append(total)
			file1.write(str(total)+'      |\n')
			break
file1.write('----------------------------------------------------------------------------------------------------\n')
file1.write('SUMMARY                                                                     '+str(sum(vals)/1000))                                              

# lis1=lis.split(' ')
# print(lis1[1])
# a=lis1[2]
# for i in range (3,len(lis1)):
# 	if lis1[i]==a:
# 		print(lis1[i-1])
# 		break

