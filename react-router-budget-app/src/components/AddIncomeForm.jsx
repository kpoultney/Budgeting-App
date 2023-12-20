import { CurrencyDollarIcon } from "@heroicons/react/24/solid"

// react imports 
import { useEffect, useRef } from "react";

// rrd imports 
import { Form, useFetcher } from "react-router-dom"

const AddIncomeForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create Income
            </h2>
            <fetcher.Form
                method="post"
                className="grid-sm"
                ref={formRef} >
                <div className="grid-xs">
                    <label htmlFor="newIncome">Income Source</label>
                    <input type="text"
                        name="newIncome"
                        id="newIncome"
                        placeholder="e.g. Work"
                        require
                        ref={focusRef} />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newIncomeAmount">Amount</label>
                    <input type="number"
                        step="0.01"
                        name="newIncomeAmount"
                        id="newIncomeAmount"
                        placeholder="e.g $2350"
                        required
                        inputMode="decimal" />
                </div>
                <input type="hidden" name="_action" value="createIncome" />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting} >
                    {
                        isSubmitting ? <span>Creating Income...</span> : (
                            <>
                                <span>Create Income</span> <CurrencyDollarIcon width={20} />
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddIncomeForm