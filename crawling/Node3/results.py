#Ruichen Teng / tengr / 678693
#Tiehua Zhang / tiehuaz / 645227
#Chao Lin / clin2 / 658584
#Xueqiang Ma/ xueqiangm/ 668190
#Zheng Zheng/ zzheng2/ 651384

import couchdb
import sys
import json
import datetime
from textblob import TextBlob
from textblob.sentiments import NaiveBayesAnalyzer
from textblob.np_extractors import ConllExtractor

#handling input
node_set = [str(x + 1) for x in range(4)]
if len(sys.argv) > 1:
	node_num = sys.argv[1]
	if node_num not in node_set:
		sys.exit("input error")
else:
	sys.exit("input error")

#get db handles
server = couchdb.Server()
db_name = 'results' + node_num
if db_name not in server:
	db = server.create(db_name)

while True:
	db = server[db_name]
	from_db = server['node' + node_num]
	for idx in from_db:
		if idx not in db:
			try:
				tweet = from_db[idx]
				tweet_text = tweet['text']
				###time
				create_time = tweet['created_at']
				#print create_time
				time_seq = create_time.split()
				#print len(time_seq)
				if (time_seq.__len__) >= 6:
				    tweet['day'] = time_seq[0]
				    tweet['month'] = time_seq[1]
				    tweet['date'] = int(time_seq[2])
				    t = time_seq[3].split(":")
				    if len(t) >= 3:
						tweet['hour'] = int(t[0])
						tweet['minute'] = int(t[1])
						tweet['second'] = int(t[2])
				    tweet['plus0000'] = time_seq[4]
				    tweet['year'] = int(time_seq[5])
		        #coordinates
		        # place = tweet["place"]
		        # if "bounding_box" in place
		        # 	bb = place["bounding_box"]
		        # 	if "coordinates" in bb:
		        # 		points = bb["coordinates"]
		        # 		tweet['p00'] = points[0][0]
		        # 		tweet['p01'] = points[0][1]
		        # 		tweet['p10'] = points[1][0]
		        # 		tweet['p11'] = points[1][1]
		        # 		tweet['p20'] = points[2][0]
		        # 		tweet['p21'] = points[2][1]
		        # 		tweet['p30'] = points[3][0]
		        # 		tweet['p30'] = points[0][1]
				#sentiment analysis
				tb = TextBlob(tweet_text)
				nb_tb = TextBlob(tweet_text, analyzer=NaiveBayesAnalyzer())
				extractor = ConllExtractor()
				np_tb = TextBlob(tweet_text, np_extractor=extractor)
				tweet['polarity'] = str(tb.sentiment.polarity)
				tweet['subjectivity'] = str(tb.sentiment.subjectivity)
				tweet['naive_bayes_classification'] = str(nb_tb.sentiment.classification)
				tweet['naive_bayes_pos_score'] = str(nb_tb.sentiment.p_pos)
				tweet['naive_bayes_neg_score'] = str(nb_tb.sentiment.p_neg)
				np_dic = {}
				for ele in np_tb.noun_phrases:
					if ele not in np_dic:
						np_dic[ele] = 1
					else:
						np_dic[ele] += 1
				tweet['noun_phrases'] = np_dic
				db[idx] = tweet
				# entry = {str(idx): tweet}
				# db.save(entry)
				# current_record = self.db_tool.get('current_record')
				# current_record['num'] = self.tweet_count
				# self.db_tool.save(current_record)

			except Exception, e:
				print e
				continue #do nothing



