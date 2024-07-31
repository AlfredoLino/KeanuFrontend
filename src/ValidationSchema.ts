import Ajv from "ajv";

const ajv = new Ajv();

const schema= {
    type: "object",
    properties: {
        widthInput: {
            type: "object",
            properties: {
                label: {type: "string"},
                helperText: {type: "string"},
                required: {type: "boolean"},
                type: {type: "string"},
            }
        },
        heightInput: {
            type: "object",
            properties: {
                label: {type: "string"},
                helperText: {type: "string"},
                type: {type: "string"},
            }
        },
        grayScaleCheck: {
            type: "object",
            properties: {
                label: {type: "string"},
            }
        },
        youngKeanuCheck: {
            type: "object",
            properties: {
                label: {type: "string"},
            }
        }
    },
    additionalProperties: false
}
;
export const validate = ajv.compile(schema);