export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="w-4 h-4 border-gray-300 rounded text-tertiary focus:ring-tertiary"
          />
          <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-tertiary ">
            Forgot your password?
          </a>
        </div>
      </div>

    )
}