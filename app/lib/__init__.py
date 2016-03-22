from urllib2 import urlopen
import json

class FacebookAPI(object):
    base_url = 'https://graph.facebook.com/v2.4'

    def __init__(self, access_token):
        self.access_token = access_token

    def get_me(self):
        return self.get('/me?fields=first_name,last_name,gender')

    def get(self, query):
        url = '%s%s&access_token=%s' % (self.base_url, query, self.access_token)
        return json.loads(urlopen(url).read())
