package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\r\n");
      out.write("\r\n");
      out.write("<html ng-app=\"libraryApp\">\r\n");
      out.write("<head>\r\n");
      out.write("    <title>LibraryApp Java</title>\r\n");
      out.write("    <link href=\"styles/css/bootstrap.css\" type=\"text/css\" rel=\"stylesheet\" />\r\n");
      out.write("    <link href=\"styles/css/bootstrap-theme.css\" type=\"text/css\" rel=\"stylesheet\" />\r\n");
      out.write("</head>\r\n");
      out.write("<body ng-controller=\"libraryAppCtrl\">\r\n");
      out.write("<div class=\"container\">\r\n");
      out.write("    <nav class=\"navbar navbar-default\">\r\n");
      out.write("        <div class=\"container-fluid\">\r\n");
      out.write("            <div class=\"navbar-header\">\r\n");
      out.write("                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n");
      out.write("                    <span class=\"sr-only\">Toggle navigation</span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                </button>\r\n");
      out.write("                <a class=\"navbar-brand\" href=\"#\">Library App</a>\r\n");
      out.write("            </div>\r\n");
      out.write("\r\n");
      out.write("            <div class=\"collapse navbar-collapse\">\r\n");
      out.write("                <ul class=\"nav navbar-nav navbar-right\">\r\n");
      out.write("                    <li ng-class=\"{ active: isPublic }\">\r\n");
      out.write("                        <a ng-href=\"#/public\">Public</a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                    <li ng-class=\"{ active: isAdmin }\">\r\n");
      out.write("                        <a ng-href=\"#/admin\">Admin</a>\r\n");
      out.write("                    </li>\r\n");
      out.write("                </ul>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </nav>\r\n");
      out.write("\r\n");
      out.write("    <div ng-view></div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<script src=\"scripts/jquery-2.1.3.min.js\" type=\"application/javascript\"></script>\r\n");
      out.write("<script src=\"scripts/angular.min.js\" type=\"application/javascript\"></script>\r\n");
      out.write("<script src=\"scripts/angular-route.min.js\" type=\"application/javascript\"></script>\r\n");
      out.write("<script src=\"scripts/bootstrap.min.js\" type=\"application/javascript\"></script>\r\n");
      out.write("\r\n");
      out.write("<script src=\"app/app.js\" type=\"application/javascript\"></script>\r\n");
      out.write("<script src=\"app/config/appSettings.js\" type=\"application/javascript\"></script>\r\n");
      out.write("<script src=\"app/config/libraryAppConfig.js\" type=\"application/javascript\"></script>\r\n");
      out.write("\r\n");
      out.write("<script src=\"app/controllers/adminCtrl.js\" type=\"application/javascript\"></script>\r\n");
      out.write("<script src=\"app/controllers/libraryAppCtrl.js\" type=\"application/javascript\"></script>\r\n");
      out.write("<script src=\"app/controllers/publicCtrl.js\" type=\"application/javascript\"></script>\r\n");
      out.write("\r\n");
      out.write("<script src=\"app/directives/searchBooksCtrl.js\" type=\"application/javascript\"></script>\r\n");
      out.write("<script src=\"app/directives/searchBooksDrct.js\" type=\"application/javascript\"></script>\r\n");
      out.write("\r\n");
      out.write("<script src=\"app/models/book.js\" type=\"application/javascript\"></script>\r\n");
      out.write("\r\n");
      out.write("<script src=\"app/services/bookService.js\" type=\"application/javascript\"></script>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
