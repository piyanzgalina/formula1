export const Input = ({ id, options, setValue}) => {
    return (
        <div>
            <select
                required
                onChange={((e) => {
                    setValue(e.target.value);
                })
                }
                className='select'
            >
                <option className='option' label={`Choose a ${id}`}></option>
                {options && options?.map((item) => (
                    <option
                        key={item.value}
                        className='option'
                        value={item.value}
                        label={item.label}
                    >
                        {item.label}
                    </option>
                    )
                )}
            </select>
        </div>
    )
}