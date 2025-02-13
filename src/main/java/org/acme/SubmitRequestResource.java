package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/submit-request")
public class SubmitRequestResource {
    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Response submitRequest(RequestData request) {
        // Validate name
        if (request.name == null || request.name.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Name is required.").build();
        }
        if (request.name.length() < 3) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Name must be at least 3 characters long.").build();
        }
        if (request.name.contains(" ")) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Name cannot contain spaces.").build();
        }

        // Validate email
        if (request.email == null || request.email.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Email is required.").build();
        }
        if (!request.email.contains("@")) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Email must contain '@'.").build();
        }
        if (!request.email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Enter a valid email address.").build();
        }

        // Validate book title
        if (request.title == null || request.title.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Title is required.").build();
        }

        // Validate author name
        if (request.author == null || request.author.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Author Name is required.").build();
        }

        return Response.ok("Request submitted successfully!").build();
    }
}
