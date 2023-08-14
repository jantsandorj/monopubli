package kr.co.tagoplus.project.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.entity.ProjectPayment;

import java.io.IOException;

public class ProjectPaymentManageSerializer extends StdSerializer<Project> {
    private static final long serialVersionUID = -5130133121699305413L;

    public ProjectPaymentManageSerializer() {
        this(Project.class);
    }

    public ProjectPaymentManageSerializer(Class<Project> t) {
        super(t);
    }

    @Override
    public void serialize(Project value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
            gen.writeNumberField("seq", value.getSeq());
            gen.writeNumberField("userSeq", value.getUserSeq());
            gen.writeStringField("name", value.getName());
            gen.writeStringField("figmaAddr", value.getFigmaAddr());
            gen.writeStringField("userMemo", value.getUserMemo());
            gen.writeStringField("vatTypeCd", value.getVatTypeCd());
            gen.writeStringField("userEstimatedEndDate", value.getUserEstimatedEndDate());
            gen.writeStringField("statusCd", value.getStatusCd());
            gen.writeStringField("adminEstimatedEndDate", value.getAdminEstimatedEndDate());
            gen.writeStringField("hasMiddlePayment", value.getHasMiddlePayment());
            gen.writeStringField("adminMemo", value.getAdminMemo());
            gen.writeStringField("situation", value.getSituation());
            gen.writeStringField("vatPrice", value.getVatPrice());
            gen.writeStringField("vatNotPrice", value.getVatNotPrice());
            gen.writeStringField("actualStartDate", value.getActualStartDate());
            gen.writeStringField("actualEndDate", value.getActualEndDate());
            gen.writeStringField("createdDate", value.getFormattedCreateTimestamp());
            gen.writeStringField("modifiedDate", value.getFormattedModifyTimestamp());
            if(value.getUser() != null){
                gen.writeObjectFieldStart("User");
                    gen.writeNumberField("seq", value.getUser().getSeq());
                    gen.writeStringField("username", value.getUser().getUsername());
                    gen.writeStringField("fullname", value.getUser().getFullname());
                    gen.writeStringField("email", value.getUser().getEmail());
                    gen.writeStringField("phone", value.getUser().getPhone());
                    gen.writeStringField("lastLoginDate", value.getUser().getLastLoginDate());
                    gen.writeStringField("gender", value.getUser().getGender());
                    gen.writeStringField("mobile", value.getUser().getMobile());
                    gen.writeStringField("job", value.getUser().getJob());
                    gen.writeStringField("zip", value.getUser().getZip());
                    gen.writeStringField("addr", value.getUser().getAddr());
                    gen.writeStringField("addrEtc", value.getUser().getAddrEtc());
                    gen.writeStringField("memberTypeCd", value.getUser().getMemberTypeCd());
                    gen.writeStringField("introduction", value.getUser().getIntroduction());
                    gen.writeStringField("createdDate", value.getUser().getCreatedDate());
                    gen.writeStringField("modifiedDate", value.getUser().getModifiedDate());

                    if(value.getUser().getCompany() != null){
                        gen.writeObjectFieldStart("Company");
                            gen.writeNumberField("seq", value.getUser().getCompany().getSeq());
                            gen.writeStringField("name", value.getUser().getCompany().getName());
                            gen.writeStringField("ceoName", value.getUser().getCompany().getCeoName());
                            gen.writeStringField("personInCharge", value.getUser().getCompany().getPersonInCharge());
                            gen.writeStringField("registerNumber", value.getUser().getCompany().getRegisterNumber());
                            gen.writeStringField("companyPhone", value.getUser().getCompany().getCompanyPhone());
                            gen.writeStringField("companyEmail", value.getUser().getCompany().getCompanyEmail());
                            gen.writeStringField("createdDate", value.getUser().getCompany().getCreatedDate());
                            gen.writeStringField("modifiedDate", value.getUser().getCompany().getModifiedDate());
                        gen.writeEndObject();
                    }
                gen.writeEndObject();
            }
            if(value.getProjectPayments() != null) {
                gen.writeArrayFieldStart("projectPayments");
                for (ProjectPayment item : value.getProjectPayments()) {
                    gen.writeStartObject();
                        gen.writeNumberField("seq", item.getSeq());
                        gen.writeNumberField("projectSeq", item.getProjectSeq());
                        gen.writeStringField("paymentType", item.getPaymentType());
                        gen.writeStringField("price", item.getPrice());
                        gen.writeStringField("description", item.getDescription());
                        gen.writeStringField("estimatedDate", item.getEstimatedDate());
                        gen.writeStringField("actualDate", item.getActualDate());
                        gen.writeStringField("paymentStatus", item.getPaymentStatus());
                        gen.writeStringField("situation", item.getSituation());
                        gen.writeStringField("createdDate", item.getCreatedDate());
                        gen.writeStringField("modifiedDate", item.getModifiedDate());
                    gen.writeEndObject();
                }
                gen.writeEndArray();
            }
        gen.writeEndObject();
    }   
}