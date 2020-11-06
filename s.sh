for(( t=0;t<60;t++)) # Block no
do
for (( i=0;i<35;i++ )) # transaction Thresold
do
	curl --header "Content-Type: application/json" --request POST --data '{"x":"basudeb"}' http://localhost:3000/transact
	sleep 1
done
sleep 14
done

