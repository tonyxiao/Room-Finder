package controllers;

import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.results.RenderJson;
import rf.GsonBinderPlugin;

public class BaseController extends Controller {

    protected static void renderBadRequest(Object... args) {
        response.status = Http.StatusCode.BAD_REQUEST;
        render(args);
    }

    protected static void created() {
        response.status = Http.StatusCode.CREATED;
    }

    protected static void noResponse() {
        response.status = Http.StatusCode.NO_RESPONSE;
    }
    
    protected static void renderJSON(Object o) {
        throw new RenderJson(GsonBinderPlugin.gson.toJson(o));
    }
    
    //TODO: Write a restful json controller that gets rid of boilerplate and can be inherited
}