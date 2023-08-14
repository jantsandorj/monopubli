package kr.co.tagoplus.auth.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import kr.co.tagoplus.auth.entity.Admin;

import java.io.IOException;

public class AdminSerializer extends StdSerializer<Admin> {

    private static final long serialVersionUID = 7250475016306449869L;

    public AdminSerializer() {
        this(Admin.class);
    }

    public AdminSerializer(Class<Admin> t) {
        super(t);
    }

    @Override
    public void serialize(Admin value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        gen.writeNumberField("seq", value.getSeq());
        gen.writeStringField("username", value.getUsername());
        gen.writeStringField("fullname", value.getFullname());
        gen.writeStringField("email", value.getEmail());
        gen.writeEndObject();
    }
}