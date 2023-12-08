import SwitchSelector from "react-switch-selector"
import { useSearchParams } from "react-router-dom"
import classNames from "classnames"

interface ClassGroupsProps {
  groups: Array<string>
  setGroup: React.Dispatch<React.SetStateAction<string>>
}

export const ClassGroups = (props: ClassGroupsProps) => {
  const { groups, setGroup } = props

  const [searchParams, setSearchParams] = useSearchParams()

  const options = groups?.map((group) => ({
    label: group,
    value: group,
    selectedBackgroundColor: "white"
  }))

  const initialIndex = groups?.findIndex(
    (group) => group === searchParams.get("group")
  )

  const onChange = (newValue) => {
    setSearchParams({ group: newValue })
    setGroup(newValue)
  }
  return (
    <div className="mb-5 overflow-auto ">
      <div
        className={classNames(
          "h-10",
          groups?.length > 5 && groups?.length < 10 && "min-w-[600px]",
          groups?.length >= 10 && groups?.length < 15 && "min-w-[800px]",
          groups?.length >= 15 && "min-w-[1200px]"
        )}
      >
        <SwitchSelector
          onChange={onChange}
          options={options}
          initialSelectedIndex={initialIndex}
          backgroundColor={"#EFF0F4"}
          selectedFontColor={"black"}
        />
      </div>
    </div>
  )
}
