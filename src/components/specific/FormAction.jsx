export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="relative flex justify-center w-full px-4 py-2 mt-10 text-sm font-medium text-white border border-transparent rounded-md bg-primary group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}