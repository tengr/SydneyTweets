#Ruichen Teng / tengr / 678693
#Tiehua Zhang / tiehuaz / 645227
#Chao Lin / clin2 / 658584
#Xueqiang Ma/ xueqiangm/ 668190
#Zheng Zheng/ zzheng2/ 651384

from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
from twitter_authentication import CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET
import couchdb
import json

auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

class StdOutListener(StreamListener):
	def __init__(self, db):
		self.db = db
		self.tweet_count = 0
		self.received_friend_ids = False

	def on_data(self, data):
		try:
			tweet = json.loads(data)
		except Exception:
			print ("Failed to parse tweet data")
			tweet = None

		if tweet:
			if tweet.has_key('id') and tweet.has_key("text"):
				new_id = "tweet:" + str(tweet['id'])
				tweet['doc_type'] = "tweet"
				tweet['text'] = tweet['text'].encode('ascii', 'ignore')
				try:
					self.db[new_id] = tweet
					print 'Succeed'
				except Exception, e:
					print 'Repeated tweet'
					print e
					pass
			else:
				print("Received a responce that is not a tweet")
				print(tweet)

	def on_error(self, status):
		print(status)

if __name__ == '__main__':
	couch = couchdb.Server()
	db_name = 'node3'
	if db_name not in couch:
 		db = couch.create(db_name)
	db = couch[db_name]
	l = StdOutListener(db)
	stream = Stream(auth, l)
	# Top Right
	stream.filter(locations = [150.99175, -33.85895,151.3439, -33.5780])
