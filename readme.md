#  Architechture:
[![im3.png](https://i.postimg.cc/xTCfM3by/im3.png)](https://postimg.cc/t7KGHPkY)
# Required Software:

PostMan(goto software in ubuntu and serach postman in software store)

# Steps to run:

1. Extract zip

2. Open it on terminal 

3. open new tabs on terminal and run SECRET="NODE0" P2P_PORT=5000 HTTP_PORT=3000 node app

4. open new tabs on terminal and run SECRET="NODE1" P2P_PORT=5001 HTTP_PORT=3001 PEERS=ws://localhost:5000 node app

5. open new tabs on terminal and run SECRET="NODE2" P2P_PORT=5002 HTTP_PORT=3002 PEERS=ws://localhost:5000,ws://localhost:5001 node app

6. open new tabs on terminal and run SECRET="NODE3" P2P_PORT=5003 HTTP_PORT=3003 PEERS=ws://localhost:5000,ws://localhost:5001,ws://localhost:5002 node app

7. open new tabs on terminal and run SECRET="NODE4" P2P_PORT=5004 HTTP_PORT=3004 PEERS=ws://localhost:5000,ws://localhost:5001,ws://localhost:5002,ws://localhost:5003 node app

8. Open firefox (with json Paser enabled)

9. write on url bar localhost:3000/blocks to see block chain from node0

10. step 9 can be done from other node also . To do this just change the port no to 3001,3002,3003,3004.

11. write on url bar localhost:3000/transactions to see transaction pool  from node0

12. step 11 can be done from other node also . To do this just change the port no to 3001,3002,3003,3004.

13. Open postman

14. set type localhost:3000/transact in the ip bar and change the request type to post

15. Now go to the body section and select raw and then select JSON from drop down

16. in body write {"x":"your_mesage"} . "your_message" will the data of the transaction

17. now send the post request from postman 

18. you will see the trasaction pool in postman window

19. now if you referesh the step 10 webaddress same transaction pool will be shown.

20. now continue 6 transcation . After every 6 transaction new block will be added to blockchain . 

21. To see the updated blockchain refresh the page opened in step 9

22. now continue sending the post request from postman ans see how blocks are added in every 6 trnsaction.

23. Verify the last hash with next block current hash







