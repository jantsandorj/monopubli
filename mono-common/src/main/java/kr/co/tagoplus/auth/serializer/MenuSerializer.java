package kr.co.tagoplus.auth.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import kr.co.tagoplus.auth.entity.Menu;

import java.io.IOException;

public class MenuSerializer extends StdSerializer<Menu> {

    private static final long serialVersionUID = 7250475016306449869L;

    public MenuSerializer() {
        this(Menu.class);
    }

    public MenuSerializer(Class<Menu> t) {
        super(t);
    }

    @Override
    public void serialize(Menu value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        gen.writeNumberField("seq", value.getSeq());
        gen.writeStringField("menuName", value.getMenuName());
        gen.writeStringField("menuId", value.getMenuId());
        gen.writeStringField("menuUrl", value.getMenuUrl());
        gen.writeStringField("showYn", value.getShowYn());
        gen.writeStringField("depth", value.getDEPTH());
        gen.writeStringField("positionType", value.getPositionType());
        gen.writeNumberField("parentSeq", value.getParentSeq());
        gen.writeStringField("authYn", value.getAuthYn());
        gen.writeEndObject();
    }
}