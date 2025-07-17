export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`text-gray-800 ${className}`}>
    {children}
  </div>
);
export const CardHeader = ({ children, className = "" }) => (
  <div className={`border-b border-gray-200 pb-2 mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>
    {children}
  </h3>
);