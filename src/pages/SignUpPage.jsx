import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

const SignUpPage = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rolesLoading, setRolesLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const selectedRole = watch("role_id");
  const password = watch("password");

  // Role'leri getir
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
        // Müşteri'yi varsayılan olarak seç
        const customerRole = response.data.find(
          (role) => role.name === "Müşteri"
        );
        if (customerRole) {
          setValue("role_id", customerRole.id);
        }
      } catch (error) {
        console.error("Roles fetch error:", error);
        toast.error("Role bilgileri yüklenirken hata oluştu");
      } finally {
        setRolesLoading(false);
      }
    };

    fetchRoles();
  }, [setValue]);

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    console.log("Roles:", roles);
    console.log("Selected role ID:", data.role_id);
    console.log("Store role ID:", roles.find((r) => r.name === "Mağaza")?.id);

    setLoading(true);
    try {
      let formData;

      if (
        parseInt(data.role_id) === roles.find((r) => r.name === "Mağaza")?.id
      ) {
        // Store için form data
        formData = {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: parseInt(data.role_id),
          store: {
            name: data.store_name,
            phone: data.store_phone,
            tax_no: data.store_tax_no,
            bank_account: data.store_bank_account,
          },
        };
      } else {
        // Customer ve Admin için form data
        formData = {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: parseInt(data.role_id),
        };
      }

      console.log("Sending to API:", formData);
      const response = await api.post("/signup", formData);
      console.log("API response:", response.data);

      toast.success(
        "Kayıt başarılı! Hesabınızı aktifleştirmek için email adresinizi kontrol edin."
      );
      history.push(location.state?.from || "/");
    } catch (error) {
      console.error("Signup error:", error);
      console.error("Error response:", error.response);
      console.error("Error data:", error.response?.data);
      console.error("Error details:", error.response?.data?.err);
      console.error("Error status:", error.response?.status);

      const errorMessage =
        error.response?.data?.message || "Kayıt sırasında bir hata oluştu";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const isStoreRole =
    parseInt(selectedRole) === roles.find((r) => r.name === "Mağaza")?.id;

  if (rolesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Hesap Oluştur
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Ad Soyad
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Ad soyad gereklidir",
                    minLength: {
                      value: 3,
                      message: "Ad soyad en az 3 karakter olmalıdır",
                    },
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email gereklidir",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Geçerli bir email adresi giriniz",
                    },
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Şifre
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Şifre gereklidir",
                    minLength: {
                      value: 8,
                      message: "Şifre en az 8 karakter olmalıdır",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                      message:
                        "Şifre en az bir küçük harf, bir büyük harf, bir rakam ve bir özel karakter içermelidir",
                    },
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Şifre Tekrar
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Şifre tekrarı gereklidir",
                    validate: (value) =>
                      value === password || "Şifreler eşleşmiyor",
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label
                htmlFor="role_id"
                className="block text-sm font-medium text-gray-700"
              >
                Rol
              </label>
              <div className="mt-1">
                <select
                  id="role_id"
                  {...register("role_id", {
                    required: "Rol seçimi gereklidir",
                  })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
                {errors.role_id && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.role_id.message}
                  </p>
                )}
              </div>
            </div>

            {/* Store Fields - Only show if Store role is selected */}
            {isStoreRole && (
              <div className="space-y-6 border-t pt-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Mağaza Bilgileri
                </h3>

                {/* Store Name */}
                <div>
                  <label
                    htmlFor="store_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mağaza Adı
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_name"
                      type="text"
                      {...register("store_name", {
                        required: isStoreRole ? "Mağaza adı gereklidir" : false,
                        minLength: {
                          value: 3,
                          message: "Mağaza adı en az 3 karakter olmalıdır",
                        },
                      })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.store_name && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.store_name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Store Phone */}
                <div>
                  <label
                    htmlFor="store_phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mağaza Telefonu
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_phone"
                      type="tel"
                      {...register("store_phone", {
                        required: isStoreRole
                          ? "Mağaza telefonu gereklidir"
                          : false,
                        pattern: {
                          value: /^(\+90|0)?[5][0-9]{9}$/,
                          message:
                            "Geçerli bir Türkiye telefon numarası giriniz",
                        },
                      })}
                      placeholder="+90 5XX XXX XX XX"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.store_phone && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.store_phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Store Tax ID */}
                <div>
                  <label
                    htmlFor="store_tax_no"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vergi Numarası
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_tax_no"
                      type="text"
                      {...register("store_tax_no", {
                        required: isStoreRole
                          ? "Vergi numarası gereklidir"
                          : false,
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message:
                            "Vergi numarası TXXXXVXXXXXX formatında olmalıdır",
                        },
                      })}
                      placeholder="T1234V123456"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.store_tax_no && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.store_tax_no.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Store Bank Account */}
                <div>
                  <label
                    htmlFor="store_bank_account"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Banka Hesap Numarası (IBAN)
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_bank_account"
                      type="text"
                      {...register("store_bank_account", {
                        required: isStoreRole
                          ? "Banka hesap numarası gereklidir"
                          : false,
                        pattern: {
                          value: /^TR\d{24}$/,
                          message:
                            "Geçerli bir IBAN numarası giriniz (TR + 24 rakam)",
                        },
                      })}
                      placeholder="TR123456789012345678901234"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.store_bank_account && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.store_bank_account.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Kayıt Oluşturuluyor...
                  </div>
                ) : (
                  "Kayıt Ol"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
