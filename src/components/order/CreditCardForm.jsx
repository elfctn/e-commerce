import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const CreditCardForm = ({ card, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });
  const [errors, setErrors] = useState({});

  // ay seçenekleri
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  // yıl seçenekleri (şu anki yıldan 10 yıl sonrasına kadar)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Kart numarası validation
    if (!formData.card_no.trim()) {
      newErrors.card_no = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.card_no.replace(/\s/g, ""))) {
      newErrors.card_no = "Please enter a valid 16-digit card number";
    }

    // Son kullanma ayı validation
    if (!formData.expire_month) {
      newErrors.expire_month = "Expiration month is required";
    }

    // Son kullanma yılı validation
    if (!formData.expire_year) {
      newErrors.expire_year = "Expiration year is required";
    } else if (formData.expire_month && formData.expire_year) {
      const selectedDate = new Date(
        formData.expire_year,
        formData.expire_month - 1
      );
      const currentDate = new Date();
      if (selectedDate <= currentDate) {
        newErrors.expire_year = "Card has expired";
      }
    }

    // Kart sahibi adı validation
    if (!formData.name_on_card.trim()) {
      newErrors.name_on_card = "Name on card is required";
    } else if (formData.name_on_card.trim().length < 2) {
      newErrors.name_on_card = "Name must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        card_no: formData.card_no.replace(/\s/g, ""), // Boşlukları kaldır
        expire_month: parseInt(formData.expire_month),
        expire_year: parseInt(formData.expire_year),
      });
    }
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "card_no") {
      // Kart numarasını formatla (4'lü gruplar halinde)
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .slice(0, 19); // 16 rakam + 3 boşluk

      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Error'ı temizle
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Edit modunda formu doldur
  useEffect(() => {
    if (card) {
      setFormData({
        card_no: card.card_no.replace(/(\d{4})(?=\d)/g, "$1 "), // Formatla
        expire_month: card.expire_month.toString(),
        expire_year: card.expire_year.toString(),
        name_on_card: card.name_on_card,
      });
    }
  }, [card]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {card ? "Edit Card" : "Add New Card"}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Kart Numarası */}
          <div>
            <label
              htmlFor="card_no"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Card Number *
            </label>
            <input
              type="text"
              id="card_no"
              name="card_no"
              value={formData.card_no}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23856D] ${
                errors.card_no ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.card_no && (
              <p className="mt-1 text-sm text-red-600">{errors.card_no}</p>
            )}
          </div>

          {/* Son Kullanma Tarihi */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expire_month"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Month *
              </label>
              <select
                id="expire_month"
                name="expire_month"
                value={formData.expire_month}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23856D] ${
                  errors.expire_month ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
              {errors.expire_month && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.expire_month}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="expire_year"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Year *
              </label>
              <select
                id="expire_year"
                name="expire_year"
                value={formData.expire_year}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23856D] ${
                  errors.expire_year ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.expire_year && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.expire_year}
                </p>
              )}
            </div>
          </div>

          {/* Kart Sahibi Adı */}
          <div>
            <label
              htmlFor="name_on_card"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name on Card *
            </label>
            <input
              type="text"
              id="name_on_card"
              name="name_on_card"
              value={formData.name_on_card}
              onChange={handleChange}
              placeholder="ELIF CETIN"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23856D] ${
                errors.name_on_card ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name_on_card && (
              <p className="mt-1 text-sm text-red-600">{errors.name_on_card}</p>
            )}
          </div>

          {/* Güvenlik Bilgisi */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Secure Payment
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Your card information is encrypted and secure. We never
                    store your full card details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#23856D] text-white rounded-lg hover:bg-[#1a6b5a] transition-colors"
            >
              {card ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
