package kr.co.tagoplus.settings.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import kr.co.tagoplus.settings.entity.Skill;

import java.io.IOException;

public class SkillSerializer extends StdSerializer<Skill> {
    private static final long serialVersionUID = -9100947296373535540L;

    public SkillSerializer() {
        this(Skill.class);
    }

    public SkillSerializer(Class<Skill> t) {
        super(t);
    }

    @Override
    public void serialize(Skill value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
            gen.writeNumberField("seq", value.getSeq());
            gen.writeStringField("name", value.getName());
            gen.writeStringField("price", value.getPrice());
            gen.writeStringField("useYn", value.getUseYn());
            gen.writeStringField("createdDate", value.getFormattedCreateTimestamp());
            gen.writeStringField("modifiedDate", value.getFormattedModifyTimestamp());
        gen.writeEndObject();
    }   
}