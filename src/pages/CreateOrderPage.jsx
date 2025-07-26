import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MapPin, Plus, Edit, Trash, Check } from "lucide-react";
import AddressForm from "../components/order/AddressForm";

const CreateOrderPage = () => {
  const { user } = useSelector((state) => state.client);
  const history = useHistory();
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
  const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);

  // City list (in real project could come from API)
  const cities = [
    "Istanbul",
    "Ankara",
    "Izmir",
    "Bursa",
    "Antalya",
    "Adana",
    "Konya",
    "Gaziantep",
    "Mersin",
    "Diyarbakir",
    "Samsun",
    "Denizli",
    "Eskisehir",
    "Urfa",
    "Malatya",
    "Erzurum",
  ];

  // Adresleri getir
  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch("/api/user/address", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAddresses(data);
      } else {
        console.error("Failed to load addresses");
      }
    } catch (error) {
      console.error("Address loading error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Yeni adres ekle
  const addAddress = async (addressData) => {
    try {
      // Mock implementasyon (backend hazır olduğunda kaldır)
      const newAddress = {
        id: Date.now(), // Benzersiz ID oluştur
        ...addressData,
      };
      setAddresses([...addresses, newAddress]);
      setShowForm(false);
      setEditingAddress(null);

      // Backend hazır olduğunda yorumu kaldır:
      /*
      const token = localStorage.getItem("token");
      const response = await fetch("/api/user/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(addressData),
      });

      if (response.ok) {
        const newAddress = await response.json();
        setAddresses([...addresses, newAddress]);
        setShowForm(false);
        setEditingAddress(null);
      } else {
        console.error("Failed to add address");
      }
      */
    } catch (error) {
      console.error("Address adding error:", error);
    }
  };

  // Adres güncelle
  const updateAddress = async (addressData) => {
    try {
      // Mock implementasyon (backend hazır olduğunda kaldır)
      setAddresses(
        addresses.map((addr) =>
          addr.id === addressData.id ? addressData : addr
        )
      );
      setShowForm(false);
      setEditingAddress(null);

      // Backend hazır olduğunda yorumu kaldır:
      /*
      const token = localStorage.getItem("token");
      const response = await fetch("/api/user/address", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(addressData),
      });

      if (response.ok) {
        const updatedAddress = await response.json();
        setAddresses(
          addresses.map((addr) =>
            addr.id === updatedAddress.id ? updatedAddress : addr
          )
        );
        setShowForm(false);
        setEditingAddress(null);
      } else {
        console.error("Failed to update address");
      }
      */
    } catch (error) {
      console.error("Address update error:", error);
    }
  };

  // Delete address
  const deleteAddress = async (addressId) => {
    if (!window.confirm("Are you sure you want to delete this address?")) {
      return;
    }

    try {
      // Mock implementasyon (backend hazır olduğunda kaldır)
      setAddresses(addresses.filter((addr) => addr.id !== addressId));
      // Silinen adres seçiliyse seçimi kaldır
      if (selectedShippingAddress?.id === addressId) {
        setSelectedShippingAddress(null);
      }
      if (selectedBillingAddress?.id === addressId) {
        setSelectedBillingAddress(null);
      }

      // Backend hazır olduğunda yorumu kaldır:
      /*
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/user/address/${addressId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setAddresses(addresses.filter((addr) => addr.id !== addressId));
        
        if (selectedShippingAddress?.id === addressId) {
          setSelectedShippingAddress(null);
        }
        if (selectedBillingAddress?.id === addressId) {
          setSelectedBillingAddress(null);
        }
      } else {
        console.error("Failed to delete address");
      }
      */
    } catch (error) {
      console.error("Address deletion error:", error);
    }
  };

  // Form submit handler
  const handleFormSubmit = (formData) => {
    if (editingAddress) {
      updateAddress({ ...formData, id: editingAddress.id });
    } else {
      addAddress(formData);
    }
  };

  // Edit address
  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  // Test için mock data (backend hazır olduğunda kaldır)
  const mockAddresses = [
    {
      id: 1,
      title: "Home",
      name: "Elif",
      surname: "Cetin",
      phone: "05304780487",
      city: "Samsun",
      district: "Atakum",
      neighborhood: "Esenevler",
    },
    {
      id: 2,
      title: "Home",
      name: "Nurcan",
      surname: "Dökümcü",
      phone: "05327004112",
      city: "Sakarya",
      district: "Sapanca",
      neighborhood: "Göl",
    },
  ];

  // Component mount olduğunda adresleri getir
  useEffect(() => {
    // Şimdilik API çağrısı yerine mock data kullan
    setAddresses(mockAddresses);
    setLoading(false);

    // Backend hazır olduğunda yorumu kaldır:
    // fetchAddresses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23856D] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading addresses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Create Order
          </h1>
          <p className="text-base lg:text-lg text-gray-600">
            Step 1: Select Shipping and Billing Addresses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kargo Adresi */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#23856D]" />
                Shipping Address
              </h2>
              <button
                onClick={() => {
                  setEditingAddress(null);
                  setShowForm(true);
                }}
                className="flex items-center px-4 py-2 bg-[#23856D] text-white rounded-lg hover:bg-[#1a6b5a] transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Address
              </button>
            </div>

            {selectedShippingAddress ? (
              <div className="border border-green-200 bg-green-50 rounded-lg p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {selectedShippingAddress.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedShippingAddress.name}{" "}
                      {selectedShippingAddress.surname}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedShippingAddress.phone}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedShippingAddress.district},{" "}
                      {selectedShippingAddress.city}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedShippingAddress.neighborhood}
                    </p>
                  </div>
                  <Check className="w-5 h-5 text-green-600" />
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                No shipping address selected
              </p>
            )}

            {/* Adres Listesi */}
            <div className="space-y-3">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedShippingAddress?.id === address.id
                      ? "border-[#23856D] bg-[#23856D]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedShippingAddress(address)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {address.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {address.name} {address.surname}
                      </p>
                      <p className="text-sm text-gray-600">{address.phone}</p>
                      <p className="text-sm text-gray-600 mt-2">
                        {address.district}, {address.city}
                      </p>
                      <p className="text-sm text-gray-600">
                        {address.neighborhood}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditAddress(address);
                        }}
                        className="p-2 text-gray-500 hover:text-[#23856D] transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteAddress(address.id);
                        }}
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fatura Adresi */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#23856D]" />
                Billing Address
              </h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="w-4 h-4 text-[#23856D] bg-gray-100 border-gray-300 rounded focus:ring-[#23856D] focus:ring-2"
                  checked={
                    selectedBillingAddress?.id === selectedShippingAddress?.id
                  }
                  onChange={(e) => {
                    if (e.target.checked && selectedShippingAddress) {
                      setSelectedBillingAddress(selectedShippingAddress);
                    } else {
                      setSelectedBillingAddress(null);
                    }
                  }}
                />
                <label
                  htmlFor="sameAsShipping"
                  className="text-sm text-gray-600"
                >
                  Same as shipping address
                </label>
              </div>
            </div>

            {selectedBillingAddress ? (
              <div className="border border-green-200 bg-green-50 rounded-lg p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {selectedBillingAddress.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedBillingAddress.name}{" "}
                      {selectedBillingAddress.surname}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedBillingAddress.phone}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedBillingAddress.district},{" "}
                      {selectedBillingAddress.city}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedBillingAddress.neighborhood}
                    </p>
                  </div>
                  <Check className="w-5 h-5 text-green-600" />
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                No billing address selected
              </p>
            )}

            {/* Adres Listesi (Fatura için) */}
            <div className="space-y-3">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedBillingAddress?.id === address.id
                      ? "border-[#23856D] bg-[#23856D]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedBillingAddress(address)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {address.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {address.name} {address.surname}
                      </p>
                      <p className="text-sm text-gray-600">{address.phone}</p>
                      <p className="text-sm text-gray-600 mt-2">
                        {address.district}, {address.city}
                      </p>
                      <p className="text-sm text-gray-600">
                        {address.neighborhood}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditAddress(address);
                        }}
                        className="p-2 text-gray-500 hover:text-[#23856D] transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteAddress(address.id);
                        }}
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Adres Formu Modal */}
        {showForm && (
          <AddressForm
            address={editingAddress}
            cities={cities}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingAddress(null);
            }}
          />
        )}

        {/* Devam Et Butonu */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              if (selectedShippingAddress && selectedBillingAddress) {
                history.push("/create-order/step2", {
                  selectedShippingAddress: selectedShippingAddress,
                  selectedBillingAddress: selectedBillingAddress,
                });
              }
            }}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
              selectedShippingAddress && selectedBillingAddress
                ? "bg-[#23856D] text-white hover:bg-[#1a6b5a]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedShippingAddress || !selectedBillingAddress}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;
