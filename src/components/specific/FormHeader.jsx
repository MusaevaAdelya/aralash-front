import {Link} from 'react-router-dom';

export default function FormHeader({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 mt-5 text-sm text-center text-gray-600">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-tertiary ">
                {linkName}
            </Link>
            </p>
        </div>
    )
}