from flask import Flask
def create_app():
  app = Flask(__name__)
  app.config['SECRETE_KEY'] = 'hdzfjgxhgubv'
  
  
  from .views import views
  from .auth import auth
  app.register_Blueprint(views, url_prefix='/')
   app.register_Blueprint(auth, url_prefix='/')
  return app