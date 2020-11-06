
print("Enter number of node")
B=int(input())
# print("Enter number of Block")
# Bl=int(input())
# print("Enter number of transaction in each block")
# T=int(input())
import os
import time
CMD='(SECRET="NODE0" P2P_PORT=5000 HTTP_PORT=3000 node app) & (sleep 5;SECRET="NODE1" P2P_PORT=5001 HTTP_PORT=3001 PEERS=ws://localhost:5000 node app) & (sleep 10; SECRET="NODE2" P2P_PORT=5002 HTTP_PORT=3002 PEERS=ws://localhost:5000,ws://localhost:5001 node app)'

for i in range(3,B):
	CMD+='& (sleep '+str(i*5)+';SECRET="NODE'+str(i)+'" P2P_PORT=500'+str(i)+' HTTP_PORT=300'+str(i)+' PEERS=';
	for j in range (i):
		CMD+='ws://localhost:500'+str(j)+','
	CMD=CMD[0:len(CMD)-1]
	CMD+=' node app) '
print(CMD)
os.system(CMD)

