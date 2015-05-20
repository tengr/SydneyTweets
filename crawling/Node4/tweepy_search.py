#Ruichen Teng / tengr / 678693
#Tiehua Zhang / tiehuaz / 645227
#Chao Lin / clin2 / 658584
#Xueqiang Ma/ xueqiangm/ 668190
#Zheng Zheng/ zzheng2/ 651384

# from pattern.web import Twitter
# import time
# # twitter = Twitter(language='en', place='Sydney') 
# # for tweet in twitter.search('"more important than"', cached=False):
# #     
# #     trends =  Twitter().trends(cached=False)
# 
# print help(Twitter)
# 
# # s = Twitter().stream('#fail')
# # for i in range(10):
# #     time.sleep(1) 
# #     s.update(bytes=1024)
# #     print s[-1].text if s else 'sdsfd'
# # # l =  Twitter().trends(cached=False)
# # # for ele in l:
# # #     print ele

import tweepy
import couchdb
import json
import time
import sys
from twitter_authentication_all import CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

# public_tweets = api.home_timeline(count=100)
def save_tweets(uid):
	public_tweets = None
	try:
		public_tweets = api.user_timeline(user_id=uid, count=200)
	except Exception, e:
		print e
	if public_tweets is not None:
		for t in public_tweets:
			# print type(t._json)
			# print str(t)
			# break
			tweet = t._json
			# tweet = json.loads(str(t))
			idid = "tweet:" + str(tweet['id'])
			if idid not in db:
				try:
					db[idid] = tweet
				except Exception, e:
					print e
			    #print(tweet.text)
			#print len(public_tweets)
	pass

	#return public_tweets


node_set = [str(x + 1) for x in range(4)]
if len(sys.argv) > 1:
	node_num = sys.argv[1]
	if node_num not in node_set:
		sys.exit("input error")
else:
	sys.exit("input error")
server = couchdb.Server()
source = server['node' + node_num]
db_name = 'top_user' + node_num
if db_name not in server:
	server.create(db_name)
db = server[db_name]

#map_usr = '''fuction(doc){}'''
map_usr = "function(doc) {emit(doc.user.id,1);}"

reduce_usr  = "function(keys,values) {return sum(values);}"


# results = source.query(map_usr)
# print results
# for ele in db.view('_all_docs'):
# for ele in db.query(map_usr,reduce_usr,group=True):
# 	print(ele.key)
# print len(db.query(map_usr,reduce_usr,group=True))
for row in source.query(map_usr,reduce_usr,group=True):
	uid =row.key
	save_tweets(int(uid))
	#time.sleep(5)


# server = couchdb.Server()
# db = server.create('python-tests')
# db['johndoe'] = dict(type='Person', name='John Doe')
# db['maryjane'] = dict(type='Person', name='Mary Jane')
# db['gotham'] = dict(type='City', name='Gotham City')
# map_fun = '''function(doc) {
# ...     if (doc.type == 'Person')
# ...         emit(doc.name, null);
# ... }'''
# for row in db.query(map_fun):
# 	print(row.key)
