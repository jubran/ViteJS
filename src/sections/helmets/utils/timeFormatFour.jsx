import { NumberFormatBase, usePatternFormat } from "react-number-format";

function TimeFormatFour(props) {
    const { format, ...rest } = usePatternFormat({ ...props, format: "##:##" });
    const _format = (val) => {
      let hours = val.substring(0, 2);
      const minutes = val.substring(2, 4);
      if (hours.length === 1 && hours[0] > 2) {
        hours = `0${hours[0]}`;
      } else if (hours.length === 2) {
        if (Number(hours) === 0) {
          hours = `00`;
        } else if (Number(hours) > 23) {
          hours = "00";
        }
      }
  
      return format(`${hours}${minutes}`);
    };
  
    return <NumberFormatBase format={_format} {...rest} />;
  }

  export default TimeFormatFour