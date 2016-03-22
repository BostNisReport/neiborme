import json

from flask import Blueprint, render_template, redirect, url_for
from flask.ext.login import current_user, login_required
from app import add_bootstrap_data, signup_required
from app.models import Request
from app.models import User

dashboard = Blueprint('dashboard', __name__,
        template_folder='templates')

@dashboard.route('/browse', methods=['GET'])
@login_required
@signup_required
def browse():
    requests = Request.query.order_by(Request.id.desc()).all()
    requests_json = json.dumps(map(lambda r: r.to_dict(), requests))
    add_bootstrap_data('requests', requests_json)
    return render_template('browse.html')

@dashboard.route('/requests', methods=['GET'])
@login_required
@signup_required
def requests():
    requests = (Request.query
            .filter_by(user_id=current_user.id)
            .order_by(Request.id.desc())
            .all())
    requests_json = json.dumps(map(lambda r: r.to_dict(), requests))
    add_bootstrap_data('requests', requests_json)
    return render_template('requests.html')

@dashboard.route('/offers', methods=['GET'])
@login_required
@signup_required
def offers():
    requests = (Request.query
            .filter_by(helpuser_id=current_user.id)
            .order_by(Request.id.desc())
            .all())


    requests_json = json.dumps(map(lambda r: r.to_dict(), requests))
    add_bootstrap_data('offers', requests_json)
    return render_template('offers.html')

@dashboard.route('/profile', methods=['GET'])
@login_required
@signup_required
def edit_profile():
    return render_template('edit_profile.html')

@dashboard.route('/offerhelp/<int:request_id>', methods=['GET'])
@login_required
@signup_required
def offerhelp(request_id):
    requestinfo = Request.query.filter_by(id=request_id).first()
    if requestinfo is None:
        flash('Request does not exist.')
        return redirect(url_for('home.index'))

    add_bootstrap_data('requestinfo', requestinfo.to_json())
    return render_template('offerhelp.html')