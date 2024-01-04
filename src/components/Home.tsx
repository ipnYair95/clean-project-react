import { Dropdown, TextField } from "@studentjourney/sj-component-library";
import { useState } from "react"
import styles from './Home.module.scss';

export const Home = () => {

  const [field, setField] = useState<any>("");

  const [fieldSelect, setFieldSelect] = useState("");

  const [items, setItems] = useState(["a", "b", "c"])

  return (
    <div className={styles.container} >

      <TextField
        label="Label"
        value={field}
        onChange={(event: any) => setField(event.target.value)}
      />

      <span> State text:  {field} </span>

      <button className={styles.btn} onClick={() => setField("Seteo")} > seteo </button>

      <button className={styles.btn} onClick={() => setField(undefined)}  > clean </button>

      <hr />

      <Dropdown
        label="Dropdown"
        value={fieldSelect}
        items={items}
        onSelectItem={(event) => setFieldSelect(event)}
      />

      <span> State select:  {fieldSelect} </span>

      <button className={styles.btn} onClick={() => setFieldSelect("a")} > seteo </button>

      <button className={styles.btn} onClick={() => setFieldSelect("")}  > clean </button>

      <button className={styles.btn} onClick={() => setItems(["1","2","3"])}  > change items </button>



    </div>
  )
}
