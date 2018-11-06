import englishTranslation from "./translations/en";
import frenchTranslation from "./translations/fr";

export const DEFAULT_LANGUAGE = "en";

export const AVAILABLE_LANGUAGES = {
    en: englishTranslation,
    fr: frenchTranslation
};

class Constants {
    static get productName() {
        return "TalentNeuron Recruit";
    }
}

export default Constants;
