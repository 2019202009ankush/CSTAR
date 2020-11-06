1. Open terminal from the source folder, (i.e., open source folder and right click then open terminal)

2. open three terminal (ctrl+sift+N)

3. Go to source folder and change ``config.js'' file according to your requirement, e.g., Number of transaction (Tx), number of peer node then save it (ctrl+s).

4. Go to ``s.sh'' file, open it and change according to your requirement, e.g., Number of block (first for loop) and same number of transaction (Tx) (second for loop) as you provided in step 3,  then save it (ctrl+s).
 
5. Terminal_1 run ``python3 init.py'' file; After complete this execution then go to next step(6)

6. Terminal_2 run ``s.sh'' (chmod 777 s.sh) and ``./s.sh''; (It is takes 3 hours for block 30, transaction 100, Peer Node 15) After complete this execution then goto next step(7)

7. open Firefox and type ``localhost:30014/blocks'' (the node 30014 when the number of node is 15, i.e., 30000, 30001, ..., 30014; you can replace any one from above node with 30014)

This will show you how the block are added to blockchain. we can save the output file ``blocks.json''. 

8. After finish the above job go to source folder and find ``Output.txt'' file. 

8. Terminal_3 run ``python3 parse.py'' and go to source folder and find ``Simulation.txt'' file    
