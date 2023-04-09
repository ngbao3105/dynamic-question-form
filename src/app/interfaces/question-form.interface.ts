import { FormControl } from "@angular/forms";
import { TypeQuestionFormEnum } from "../enum/question-form.enum";

export interface IBaseForm {
    id?: string;
    question?: string;
    isRequired?: boolean,
    formType?: TypeQuestionFormEnum,
    answers?: string[] | string,
    formControl?: FormControl,
    options?: ICheckListOption[];
    isHasOtherOption?: boolean;
    otherValue?: string;
}

export interface ICheckListForm extends IBaseForm {
    answers?: string[],
}



export interface ICheckListOption {
    label?: string,
    id?: string;
}

export interface IParagraphFormConfig extends IBaseForm {
    formControl?: FormControl,
}

export type IFormAdapterConfig = IParagraphFormConfig 