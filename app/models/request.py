import json, decimal
from app import db
from datetime import datetime

class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return float(o)
        return super(DecimalEncoder, self).default(o)

class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, 'isoformat'): #handles both date and datetime objects
            return obj.isoformat()
        else:
            return json.JSONEncoder.default(self, obj)

class Request(db.Model):
    __tablename__ = 'requests'

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Numeric(precision=8, scale=2))
    city = db.Column(db.Unicode(80))
    date = db.Column(db.Date)
    details = db.Column(db.UnicodeText)
    street = db.Column(db.Unicode(100))
    title = db.Column(db.Unicode(80))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User')
    zipcode = db.Column(db.String(10))

    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)

    myoffer = db.Column(db.UnicodeText)
    offer_status = db.Column(db.Unicode(255))
    helpuser_id = db.Column(db.Integer)
    lmessage_at = db.Column(db.DateTime, default=datetime.now)

    def __init__(self):
        pass

    def to_dict(self):
        return {
            'id': self.id,
            'amount': int(self.amount),
            'city': self.city,
            'date': self.date.strftime('%m/%d/%Y'),
            'details': self.details,
            'first_name': self.user.first_name,
            'img_path': self.user.profile_picture_url(),
            'street': self.street,
            'title': self.title,
            'user_id': self.user_id,
            'zipcode': self.zipcode,
            'myoffer': self.myoffer,
            'offerstatus': self.offer_status,
            'helpuser_id': self.helpuser_id,
            'lmessagetime': self.lmessage_at.strftime('%I:%M %p')
        }

    def to_json(self):
        return json.dumps({
            'id': self.id,
            'amount': self.amount,
            'city': self.city,
            'date': self.date.strftime('%m/%d/%Y'),
            'details': self.details,
            'first_name': self.user.first_name,
            'img_path': self.user.profile_picture_url(),
            'street': self.street,
            'title': self.title,
            'user_id': self.user_id,
            'zipcode': self.zipcode,
            'myoffer': self.myoffer,
            'offerstatus': self.offer_status,
            'helpuser_id': self.helpuser_id,
            'lmessagetime': self.lmessage_at.strftime('%I:%M %p')
            }, cls=DecimalEncoder)

    def __repr__(self):
        return '<Request %r>' % self.id
