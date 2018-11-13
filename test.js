{
    code: String,
    title: {
        type: String,
        required: true   
    },
    slides: [{
        questionText: {
            type: String,
            required: true
        },
        isSkippingAllowed: {
            type: Boolean,
            default: false
        },
        isAutoSkipped: {
            type: Boolean,
            default: false
        },
        elements: [{
                isRequired: Boolean,
                elementType: String,
                validationRule: String,
                isMultiSelectAllowed: Boolean,
                options: [{
                    value: String,
                    label: String,
                    image: String,
                    image_alt_text: String,
                    isImageAvailable: Boolean,
                    isOptionMainOption: Boolean,
                     }],
                textLabel: String,
                textElementName: String,
                textPlaceholder: String,
                textIcon: String,
                defaultValue: String,
                dateOptions: [{
                    rule: String,
                    }]
                }]
        }]
    }