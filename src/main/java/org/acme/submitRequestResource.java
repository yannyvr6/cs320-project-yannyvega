//Applies validations for the request.js

package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/submit-request")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
class SubmitRequestResource {
    @POST
    @Transactional
    public Response submitRequest(BookRequest request) {
        // Validate name
        if (request.name == null || request.name.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Name is required.").build();
        }
        if (request.name.length() < 3) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Name must be at least 3 characters long.").build();
        }

        // Validate email
        if (request.email == null || request.email.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Email is required.").build();
        }
        if (!request.email.contains("@")) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Email must contain '@'.").build();
        }

        // Validate book title
        if (request.title == null || request.title.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Title is required.").build();
        }

        // Validate author name
        if (request.author == null || request.author.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Author Name is required.").build();
        }

        //BookRequest Entity
        BookRequest bookRequest = new BookRequest();
        bookRequest.title = request.title;
        bookRequest.author = request.author;
        bookRequest.email = request.email;
        bookRequest.name = request.name;

        bookRequest.persist();


        return Response.status(Response.Status.CREATED).entity(bookRequest).build();

    }
}


@Path("/book-request")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class submitRequestResource {


    //CREATE
    @POST
    @Path("/submit-request")
    public Response createRequest (BookRequest request) {
        request.persist();
        return Response.status(Response.Status.CREATED).entity(request).build();
    }

    //READ
    @GET
    @Path("/get-request")
    public List<BookRequest> getAllRequest(){
        return BookRequest.listAll();
    }

    //PUT
    @PUT
    @Path("/update-request/{id}")
    public Response updateRequest (@PathParam("id") String id, BookRequest updatedRequest) {
        BookRequest request = BookRequest.findById(id);

        if (request == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("Request not found.").build();
        }

        //Update

        request.title = updatedRequest.title;
        request.author = updatedRequest.author;
        request.email = updatedRequest.email;
        request.name = updatedRequest.name;
        request.persist();

        return Response.status(Response.Status.OK).entity(request).build();
    }

    //DELETE
    @DELETE
    @Path("/delete-request/{id}")
    public Response deleteRequest (@PathParam("id") String id) {
        BookRequest request = BookRequest.findById(id);

        if (request == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("Request not found.").build();
        }
        request.delete();
        return Response.status(Response.Status.NO_CONTENT).build();
        }
    }



