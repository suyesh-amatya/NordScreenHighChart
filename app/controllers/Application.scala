package controllers

import play.api._
import play.api.mvc._
import play.api.i18n.Messages

object Application extends Controller {

  def index = Action {
    Ok(views.html.sweden(Messages("subheader.sweden")))
  }
  
  def sweden = Action {
    Ok(views.html.sweden(Messages("subheader.sweden")))
  }

  def finland = Action {
    Ok(views.html.finland(Messages("subheader.finland")))
  }

  def norway = Action {
    Ok(views.html.norway(Messages("subheader.norway")))
  }

  def estonia = Action {
    Ok(views.html.estonia(Messages("subheader.estonia")))
  }

  def iceland = Action {
    Ok(views.html.iceland(Messages("subheader.iceland")))
  }
  
  def comparecountries = Action {
    Ok(views.html.comparecountries(Messages("subheader.comparecountries")))
  }

}