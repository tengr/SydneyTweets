# SydneyTweets

The following User Guide is based on Utuntu Operating System. 

# Installing Ansible

To install ansible run these commands:
	
	$ sudo apt-get install software-properties-common
	$ sudo apt-add-repository ppa:ansible/ansible
	$ sudo apt-get update
	$ sudo apt-get install ansible

# Playbooks
There are 3 playbooks used for deployment. These playbooks are used for creating a new instance on openstack and installing all the required packages and dependencies for crawling and analysing Tweets.

## Plays:
* `nova.yml` using module nova_compute to create a new instance on openstack(the parameters nodename and flavorid need to be provided).
* `mount.yml` for volume to be attached to the instance, format it to ext4 and mount it under `/mnt/data`, then create directory couchdb.
* `apps.yml` install packages and dependencies on instance for crawling, analysing and storing tweets.

To run these plays more conveniently, we provide the script `install_instance.sh`.

## Basic Procedures

1.	Add key-pairs to Nectar through Dashboard and store the private key at `~/ansible_playbook/nectar.key`.
2.	Modify the `nova.yml` file, and replace `login_username`, `login_password`, `login_tenant_name`, `key_name` (You can find those information in the `OpenStack RC File` downloaded from Nectar).
3.	Run the `ansible_playbook/install_instance.sh` script, there will be 3 options on your screen.
4.	Enter `1` to create instance，enter node name and flavor id based on the suggesions given.
5.	If you want to create more than one instance，please repeat step 1 and 2.
6.	Find the recently built instance in the Nectar Dashboard, record their IP addresses and add them to the file `/etc/ansible/hosts`, every node would have a unique name and its coorsponding IP address. e.g.
	* [node4]
	* node4 ansible_ssh_host=144.6.227.100
7.	Create a new volume from the Nectar Dashboard, and attach it to the relative instance.
8.	Repeat step 3
9.	Enter `2` to mount. Then enter host name following the suggestions (the hosts defined in `/etc/ansible/hosts`).
10.	Repeat step 3
11.	Enter `3` to install required software packages and dependencies. Then enter host name following the suggestions (the hosts defined in `/etc/ansible/hosts`).

# test run

	
1.	Modify the `twitter_authentication.py` file, and replace `CONSUMER_KEY`, `CONSUMER_SECRET`, `ACCESS_TOKEN`, `ACCESS_TOKEN_SECRET`.
2.	For streaming, try `setsid python tweepy_streaming_api_Node#.py`, # is the node number, e.g. 1,2,3,4
3.	For analysing, try `setsid python results.py #`, # is the node number, e.g. 1,2,3,4
4.	For checking database, try `source check_db#.sh`, # is the node number, e.g. 1,2,3,4
