package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/get-request")
public class GetRequestResources {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<BookRequest> getRequest() {
        return BookRequest.listAll();
    }
}
