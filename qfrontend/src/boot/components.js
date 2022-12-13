import XInput from "components/XInput";
import XSelect from "components/XSelect";
import XLoading from "components/XLoading";

export default async ({Vue}) => {
  Vue.component('XInput', XInput);
  Vue.component('XSelect', XSelect);
  Vue.component('XLoading', XLoading);
}

