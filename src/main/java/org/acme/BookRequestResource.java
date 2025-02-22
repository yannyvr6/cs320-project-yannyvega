package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/book-request")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BookRequestResource {

    // CREATE
    @POST
    @Path("/submit")
    @Transactional
    public Response createRequest(BookRequest request) {
        request.persistAndFlush();
        return Response.status(Response.Status.CREATED).entity(request).build();
    }

    // READ
    @GET
    @Path("/get-all")
    public List<BookRequest> getAllRequests() {
        return BookRequest.listAll();
    }

    // UPDATE
    @PUT
    @Path("/update/{id}")
    @Transactional
    public Response updateRequest(@PathParam("id") Long id, BookRequest updatedRequest) {
        BookRequest request = BookRequest.findById(id);

        if (request == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("Request not found.").build();
        }

        // Update fields
        request.title = updatedRequest.title;
        request.author = updatedRequest.author;
        request.email = updatedRequest.email;
        request.name = updatedRequest.name;
        request.persistAndFlush();

        return Response.status(Response.Status.OK).entity(request).build();
    }

    // DELETE
    @DELETE
    @Path("/delete/{id}")
    @Transactional
    public Response deleteRequest(@PathParam("id") Long id) {
        BookRequest request = BookRequest.findById(id);

        if (request == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("Request not found.").build();
        }
        request.delete();
        return Response.status(Response.Status.NO_CONTENT).build();
    }
}
