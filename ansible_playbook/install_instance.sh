# sh file

#Ruichen Teng / tengr / 678693
#Tiehua Zhang / tiehuaz / 645227
#Chao Lin / clin2 / 658584
#Xueqiang Ma/ xueqiangm/ 668190
#Zheng Zheng/ zzheng2/ 651384

echo "\n1. Install new instance with nova. (nova.yml)\n2. Mount /mnt/data file. (mount.yml)\nPlease enter the option:\n3. Install tools. (playbook.yml)"
read OPT
echo ""

if [ "$OPT" -eq 2 ]; then
	echo "Please enter hostname:"
	read HOSTS
	ansible-playbook mount.yml -u ubuntu --private-key=~/ansible_playbook/nectar.key --extra-vars "hosts=$HOSTS"
	else
		if [ "$OPT" -eq 3 ]; then
			echo "Please enter hostname:"
			read HOSTS
			ansible-playbook apps.yml -u ubuntu --private-key=~/ansible_playbook/nectar.key --extra-vars "hosts=$HOSTS"
		else
			# Write the age to a new file.
			if [ "$OPT" -eq 1 ]; then
				echo "Please enter node name:"
				read NODENAME
				echo "Please enter flavor id:"
				read FLAVORID
				ansible-playbook nova.yml --extra-vars "nodename=$NODENAME flavorid=$FLAVORID"
			fi
		fi
fi