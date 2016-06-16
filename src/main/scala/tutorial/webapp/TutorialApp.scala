package tutorial.webapp

import scala.scalajs.js.JSApp
import org.scalajs.jquery.jQuery

object TutorialApp extends JSApp {

  def main(): Unit = {
    jQuery(setupUI _)
  }
  
  def addClickedMessage =
    jQuery("body").append("<p>You clicked me!</p>")

  def setupUI =
    jQuery("body").append("<p>Hello World!</p>")
    jQuery("""<button type="button">Click Me!</button>""")
      .click(addClickedMessage _)
      .appendTo(jQuery("body"))
    
}
