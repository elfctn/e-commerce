import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CreditCard, Plus, Edit, Trash, Check, ArrowLeft } from "lucide-react";
import { useHistory } from "react-router-dom";
import CreditCardForm from "../components/order/CreditCardForm";

const CreateOrderStep2Page = () => {
  const { user } = useSelector((state) => state.client);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const history = useHistory();

  // test için mock data (backend hazır olduğunda kaldır)
  const mockCards = [
    {
      id: 1,
      card_no: "1234567890123456",
      expire_month: 12,
      expire_year: 2025,
      name_on_card: "Elif Cetin",
      card_type: "America Express",
      last_four: "3456",
    },
    {
      id: 2,
      card_no: "9876543210987654",
      expire_month: 6,
      expire_year: 2026,
      name_on_card: "Nurcan Dökümcü",
      card_type: "Mastercard",
      last_four: "7654",
    },
  ];

  // kartları getir
  const fetchCards = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch("/user/card", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCards(data);
      } else {
        console.error("Failed to load cards");
      }
    } catch (error) {
      console.error("Card loading error:", error);
    } finally {
      setLoading(false);
    }
  };

  // yeni kart ekle
  const addCard = async (cardData) => {
    try {
      // mock implementasyon (backend hazır olduğunda kaldır)
      const newCard = {
        id: Date.now(), // benzersiz id oluştur
        ...cardData,
        card_type: getCardType(cardData.card_no),
        last_four: cardData.card_no.slice(-4),
      };
      setCards([...cards, newCard]);
      setShowForm(false);
      setEditingCard(null);

      // backend hazır olduğunda yorumu kaldır:
      /*
      const token = localStorage.getItem("token");
      const response = await fetch("/user/card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        const newCard = await response.json();
        setCards([...cards, newCard]);
        setShowForm(false);
        setEditingCard(null);
      } else {
        console.error("Failed to add card");
      }
      */
    } catch (error) {
      console.error("Card adding error:", error);
    }
  };

  // kart güncelle
  const updateCard = async (cardData) => {
    try {
      // mock implementasyon (backend hazır olduğunda kaldır)
      const updatedCard = {
        ...cardData,
        card_type: getCardType(cardData.card_no),
        last_four: cardData.card_no.slice(-4),
      };
      setCards(
        cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
      );
      setShowForm(false);
      setEditingCard(null);

      // backend hazır olduğunda yorumu kaldır:
      /*
      const token = localStorage.getItem("token");
      const response = await fetch("/user/card", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        const updatedCard = await response.json();
        setCards(
          cards.map((card) =>
            card.id === updatedCard.id ? updatedCard : card
          )
        );
        setShowForm(false);
        setEditingCard(null);
      } else {
        console.error("Failed to update card");
      }
      */
    } catch (error) {
      console.error("Card update error:", error);
    }
  };

  // kart sil
  const deleteCard = async (cardId) => {
    if (!window.confirm("Are you sure you want to delete this card?")) {
      return;
    }

    try {
      // mock implementasyon (backend hazır olduğunda kaldır)
      setCards(cards.filter((card) => card.id !== cardId));
      // silinen kart seçiliyse seçimi kaldır
      if (selectedCard?.id === cardId) {
        setSelectedCard(null);
      }

      // backend hazır olduğunda yorumu kaldır:
      /*
      const token = localStorage.getItem("token");
      const response = await fetch(`/user/card/${cardId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setCards(cards.filter((card) => card.id !== cardId));
        // Remove selection if deleted card was selected
        if (selectedCard?.id === cardId) {
          setSelectedCard(null);
        }
      } else {
        console.error("Failed to delete card");
      }
      */
    } catch (error) {
      console.error("Card deletion error:", error);
    }
  };

  // kart tipini belirle
  const getCardType = (cardNumber) => {
    const number = cardNumber.replace(/\s/g, "");
    if (number.startsWith("4")) return "Visa";
    if (number.startsWith("5")) return "Mastercard";
    if (number.startsWith("3")) return "American Express";
    return "Unknown";
  };

  // kart numarasını maskele
  const maskCardNumber = (cardNumber) => {
    return "**** **** **** " + cardNumber.slice(-4);
  };

  // form submit handler
  const handleFormSubmit = (formData) => {
    if (editingCard) {
      updateCard({ ...formData, id: editingCard.id });
    } else {
      addCard(formData);
    }
  };

  // kart düzenleme
  const handleEditCard = (card) => {
    setEditingCard(card);
    setShowForm(true);
  };

  // component mount olduğunda kartları getir
  useEffect(() => {
    // şimdilik api çağrısı yerine mock data kullan
    setCards(mockCards);
    setLoading(false);

    // backend hazır olduğunda yorumu kaldır:
    // fetchCards();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23856D] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading cards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => history.goBack()}
            className="flex items-center text-gray-600 hover:text-[#23856D] transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Address Selection
          </button>

          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Payment Method
            </h1>
            <p className="text-base lg:text-lg text-gray-600">
              Step 2: Select Your Payment Method
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-[#23856D]" />
              Credit Cards
            </h2>
            <button
              onClick={() => {
                setEditingCard(null);
                setShowForm(true);
              }}
              className="flex items-center px-4 py-2 bg-[#23856D] text-white rounded-lg hover:bg-[#1a6b5a] transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Card
            </button>
          </div>

          {/* Seçili Kart */}
          {selectedCard ? (
            <div className="border border-green-200 bg-green-50 rounded-lg p-4 mb-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <CreditCard className="w-5 h-5 text-[#23856D] mr-2" />
                    <span className="font-semibold text-gray-900">
                      {selectedCard.card_type} •••• {selectedCard.last_four}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {selectedCard.name_on_card}
                  </p>
                  <p className="text-sm text-gray-600">
                    Expires:{" "}
                    {selectedCard.expire_month.toString().padStart(2, "0")}/
                    {selectedCard.expire_year}
                  </p>
                </div>
                <Check className="w-5 h-5 text-green-600" />
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8 mb-6">
              No payment method selected
            </p>
          )}

          {/* Kart Listesi */}
          <div className="space-y-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedCard?.id === card.id
                    ? "border-[#23856D] bg-[#23856D]/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedCard(card)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CreditCard className="w-5 h-5 text-[#23856D] mr-2" />
                      <span className="font-semibold text-gray-900">
                        {card.card_type} •••• {card.last_four}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{card.name_on_card}</p>
                    <p className="text-sm text-gray-600">
                      Expires: {card.expire_month.toString().padStart(2, "0")}/
                      {card.expire_year}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditCard(card);
                      }}
                      className="p-2 text-gray-500 hover:text-[#23856D] transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCard(card.id);
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

          {/* Ödeme Seçenekleri */}
          {selectedCard && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Options
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div>
                    <p className="font-medium text-gray-900">
                      Credit Card Payment
                    </p>
                    <p className="text-sm text-gray-600">
                      Pay with your selected card
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#23856D]">Secure</p>
                    <p className="text-xs text-gray-500">SSL Encrypted</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Kart Formu Modal */}
        {showForm && (
          <CreditCardForm
            card={editingCard}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingCard(null);
            }}
          />
        )}

        {/* Devam Et Butonu */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              if (selectedCard) {
                console.log("Order completed with card:", selectedCard);
                alert(
                  "Order completed successfully! (This would go to review page)"
                );
              }
            }}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
              selectedCard
                ? "bg-[#23856D] text-white hover:bg-[#1a6b5a]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedCard}
          >
            Continue to Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderStep2Page;
