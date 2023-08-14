package kr.co.tagoplus.code.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import kr.co.tagoplus.code.entity.Code;

import java.io.IOException;

public class CodeSerializer extends StdSerializer<Code> {

    private static final long serialVersionUID = 7250475016306449869L;

    public CodeSerializer() {
        this(Code.class);
    }

    public CodeSerializer(Class<Code> t) {
        super(t);
    }

    @Override
    public void serialize(Code value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        gen.writeNumberField("seq", value.getSeq());
        gen.writeStringField("codeGroup", value.getCodeGroup());
        gen.writeStringField("codeGroupNm", value.getCodeGroupNm());
        gen.writeStringField("code", value.getCode());
        gen.writeStringField("codeNm", value.getCodeNm());
        gen.writeStringField("codeEngNm", value.getCodeEngNm());
        gen.writeStringField("codeDescript", value.getCodeDescript());
        gen.writeStringField("useYn", value.getUseYn());
        gen.writeEndObject();
    }
}